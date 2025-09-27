
import { Suspense } from 'react';
import CourseStartClient from './CourseStartClient';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}

export default function CourseStartPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 mx-auto mb-4 animate-spin">
            <i className="ri-loader-4-line text-4xl text-red-400"></i>
          </div>
          <p className="text-gray-300">加载中...</p>
        </div>
      </div>
    }>
      <CourseStartClient courseId={params.id} />
    </Suspense>
  );
}
