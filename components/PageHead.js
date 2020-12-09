export default function PageHead(props) {
    return (
      <div>
          <div className="md:flex md:items-center md:justify-between bg-gray-700 px-4 py-5 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex-1 min-w-0 max-w-7xl mx-auto ">
              <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
              {props.title}
              </h2>
          </div>
         
          </div>
        <style jsx>{`
  
        `}</style>
      </div>
    )
  }