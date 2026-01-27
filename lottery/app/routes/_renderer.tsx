import { jsxRenderer } from 'hono/jsx-renderer';
import { Script } from 'honox/server';

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {title ? <title>{title}</title> : <title>Lottery App</title>}
        <Script src="/app/client.ts" async />
        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background: #f5f5f5;
              color: #333;
            }

            .page-container {
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
            }

            h1 {
              font-size: 2rem;
              margin-bottom: 1rem;
              color: #2c3e50;
            }

            h2 {
              font-size: 1.5rem;
              margin-bottom: 0.75rem;
              color: #34495e;
            }

            h3 {
              font-size: 1.25rem;
              margin-bottom: 0.5rem;
              color: #7f8c8d;
            }

            .join-form,
            .host-dashboard {
              background: white;
              padding: 2rem;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .form-group {
              margin-bottom: 1.5rem;
            }

            label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 500;
              color: #555;
            }

            input[type="text"] {
              width: 100%;
              padding: 0.75rem;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 1rem;
            }

            input[type="text"]:focus {
              outline: none;
              border-color: #3498db;
            }

            button {
              background: #3498db;
              color: white;
              border: none;
              padding: 0.75rem 1.5rem;
              font-size: 1rem;
              border-radius: 4px;
              cursor: pointer;
              transition: background 0.2s;
            }

            button:hover:not(:disabled) {
              background: #2980b9;
            }

            button:disabled {
              background: #bdc3c7;
              cursor: not-allowed;
            }

            .start-button {
              background: #27ae60;
              font-size: 1.1rem;
              padding: 1rem 2rem;
            }

            .start-button:hover:not(:disabled) {
              background: #229954;
            }

            .error-message {
              background: #e74c3c;
              color: white;
              padding: 0.75rem;
              border-radius: 4px;
              margin: 1rem 0;
            }

            .success-message {
              background: #2ecc71;
              color: white;
              padding: 2rem;
              border-radius: 8px;
              text-align: center;
            }

            .info-message {
              color: #7f8c8d;
              font-style: italic;
              margin-top: 0.5rem;
            }

            .entries-section {
              margin-top: 2rem;
            }

            .entries-list {
              list-style: none;
              background: #ecf0f1;
              padding: 1rem;
              border-radius: 4px;
            }

            .entries-list li {
              padding: 0.5rem;
              border-bottom: 1px solid #bdc3c7;
            }

            .entries-list li:last-child {
              border-bottom: none;
            }

            .result-section {
              background: #f39c12;
              color: white;
              padding: 2rem;
              border-radius: 8px;
              text-align: center;
              margin-top: 2rem;
            }

            .winner-name {
              font-size: 2rem;
              font-weight: bold;
              margin-top: 1rem;
            }

            .lottery-status {
              background: white;
              padding: 2rem;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              margin-top: 2rem;
            }

            .running-animation {
              text-align: center;
              font-size: 1.5rem;
              padding: 2rem;
              animation: pulse 1s infinite;
            }

            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }

            hr {
              border: none;
              border-top: 1px solid #ecf0f1;
              margin: 2rem 0;
            }
          `}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
});
