import Image from "next/image";

export const productData = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    if (!res.ok) {
        throw new Error('Something went wrong!');
    }
    const data = await res.json();

    // Created artificial delay to show the skeleton loading...
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    });
}

export const metadata = {
    title: 'Skeleton Loading Products',
    description: 'Skeleton Loading NEXT.JS (13.4.4) Example',
}

const Products = async () => {
    const data = await productData();
    return (
        <>
            <div className="p-5 sm:p-5 md:p-10 lg:p-20">
                <h1 className="text-center mb-10 text-2xl font-bold">Products</h1>
                <div className="grid grid-cols-12 gap-4">
                    {
                        data.map((product) => (
                            <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2 shadow-lg border-2 rounded-lg">
                                <div className="px-4 py-2">
                                    <h1 className="text-gray-900 font-bold text-2xl uppercase line-clamp-1">{product.title}</h1>
                                    <p className="text-gray-600 text-sm mt-1 line-clamp-3">{product.description}</p>
                                </div>
                                <Image className="w-full h-56 object-contain mix-blend-color-burn p-5" src={product.image} width={500} height={300} alt="product image" priority />
                                <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                                    <h1 className="text-gray-200 font-bold text-xl">${product.price}</h1>
                                    <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded hover:scale-105 transition-transform">Add to card</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products
