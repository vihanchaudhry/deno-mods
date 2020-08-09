import { ModuleData } from '../interfaces/module-data';

function ModuleItem(data: ModuleData) {
  return (
    <div
      className={`flex flex-col max-w-sm rounded overflow-hidden bg-white shadow px-6 mb-6 flex-shrink-0 md:mx-3 md:w-96 ${
        data.isLoading ? 'h-96 w-64 bg-gray-200 justify-center items-center' : 'justify-between'
      }`}
    >
      {data.isLoading ? (
        <p className='text-center mx-auto text-lg'>Loading...</p>
      ) : (
        <>
          <h3 className='font-bold text-gray-900 mt-6 mb-0'>{data.module.name}</h3>
          <p className='text-sm text-gray-600'>{data.module.full_name}</p>
          <p className='text-gray-700'>{data.module.description}</p>
          <p className='text-gray-800 text-sm'>License: {data.module.license}</p>
          <p className='text-gray-900 font-semibold'>⭐ {data.module.stars_count}</p>
          <p className='text-blue-500 hover:text-blue-700'>
            <a href={data.module.html_url} target='_blank'>
              Repository
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default ModuleItem;
