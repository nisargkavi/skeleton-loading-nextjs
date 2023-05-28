import style from '@/app/products/skeleton.module.css';

export default function Loading() {
  return (
    <>
      <div className="p-5 sm:p-5 md:p-10 lg:p-20">
        <h1 className="text-center mb-10 text-2xl font-bold">Products</h1>
        <div className="grid grid-cols-12 gap-4">
          {
            [...new Array(20)].map(() => (
              <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2 shadow-lg border-2 rounded-lg">
                <div className="px-4 py-3">
                  <h1 className={`${style.skeleton} w-[60%] h-[10px] rounded mb-4`}></h1>
                  <p className={`${style.skeleton} w-[100%] h-[14px] rounded mb-2`}></p>
                  <p className={`${style.skeleton} w-[100%] h-[14px] rounded mb-2`}></p>
                  <p className={`${style.skeleton} w-[100%] h-[14px] rounded`}></p>
                </div>
                <div className='overflow-hidden'>
                  <div className={`${style.skeleton} w-[500px] h-[230px] rounded`}></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                  <h1 className={`${style.skeleton} w-[20%] h-[10px] rounded my-2`}></h1>
                  <button className={`${style.skeleton} w-[40%] h-[25px] rounded`}></button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}