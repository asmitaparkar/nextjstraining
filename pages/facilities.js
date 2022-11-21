import Link from "next/link";
import React from "react";

const Facilities = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/facilities/lab">Lab</Link>
        </li>
        <li>
          <Link href="/facilities/library">Library</Link>
        </li>
        <li>
          <Link href="/facilities/sports">Sport</Link>
        </li>
      </ul>
    </div>
  );
};

export default Facilities;
