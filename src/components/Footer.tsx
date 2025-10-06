import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto text-gray-600 text-sm py-4 flex justify-center space-x-2">
      <span>Built by Matt</span>
      <span>|</span>
      <a
        href="https://github.com/MattBarkway"
        className="underline hover:text-gray-800"
      >
        View on GitHub
      </a>
    </footer>
  );
}
