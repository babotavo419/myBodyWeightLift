import React from 'react';
import Posts from '../components/Posts';

export default function Blog() {

  return (
    <>
    <div className=" min-h-screen">

      <main className="p-8">
        {/* @ts-expect-error Server Component */}
        <Posts />
      </main>
    </div>
    </>
  );
}

