import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { exec } from "child_process";

// Create server instance
const server = new McpServer({
  name: "local-tools",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// ================================================

// Register weather tools

server.tool(
  "ping",
  "Ping the server or a host",
  {
    message: z.string().describe("Host or message to ping"),
  },
  async ({ message }) => {
    // 判断 message 是否为域名或 IP
    if (/^[\w\.-]+(\.[a-zA-Z]{2,})$/.test(message)) {
      // 是域名，执行系统 ping
      return new Promise((resolve) => {
        exec(`ping -c 1 ${message}`, (error, stdout, stderr) => {
          if (error) {
            resolve({
              content: [
                {
                  type: "text",
                  text: `Ping ${message} failed: ${stderr || error.message}`,
                },
              ],
            });
          } else {
            resolve({
              content: [
                {
                  type: "text",
                  text: `Ping ${message} success:\n${stdout}`,
                },
              ],
            });
          }
        });
      });
    } else {
      // 不是域名，原样返回
      return {
        content: [
          {
            type: "text",
            text: `Pong 121: ${message}`,
          },
        ],
      };
    }
  }
);

server.tool(
  "echo",
  "Echo a message",
  {
    message: z.string().describe("Message to echo"),
    longitude: z
      .number()
      .min(-180)
      .max(180)
      .describe("Longitude of the location"),
  },
  async ({ message }) => {
    return {
      content: [
        {
          type: "text",
          text: `Echo: ${message}`,
        },
      ],
    };
  }
);

// ================================================

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
