import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} FlatMate Finder. All rights reserved.</p>
    </footer>
  );
}
