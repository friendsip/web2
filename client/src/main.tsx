import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set favicon dynamically
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.type = 'image/x-icon';
faviconLink.href = '/favicon.ico';
document.head.appendChild(faviconLink);

createRoot(document.getElementById("root")!).render(<App />);
