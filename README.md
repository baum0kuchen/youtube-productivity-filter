# YouTube Productivity Filter

A lightweight Chrome Extension (Manifest V3) designed to automatically detect and hide the YouTube comment section to eliminate distractions.

## Key Features
- Dynamic DOM Monitoring: Uses JavaScript's `MutationObserver` to watch for DOM updates asynchronously, ensuring comments stay hidden even during Single-Page Application (SPA) view transitions without page reloads.
- Race Condition Protection: Automatically targets dynamically loaded elements as soon as they appear in the DOM rather than relying on brittle fixed timeouts.
- Manifest V3 Compliant: Built using Google's latest extension standard for optimal performance and security.

## Built With

* JavaScript (ES6+)
* Chrome Extension API (Manifest V3)
* HTML / DOM Manipulation

## Installation & Usage

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** in the top-left corner.
5. Select the project folder containing `manifest.json`.
6. Navigate to any YouTube video—the comments section will be automatically hidden.
