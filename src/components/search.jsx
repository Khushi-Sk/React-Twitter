export default function Search() {

    const base = "bg-searchbar-fill w-96 h-11 py-2.5 pr-60 pl-4 flex items-start rounded-full border-2 gap-3 hover:border-twitter-blue"
    const searchImg = "bg-[url('.././src/assets/Group.png')] bg-no-repeat bg-origin-padding bg-left hover:bg-[url('.././src/assets/search.png')]"
    const inputClasses="text-neutral-100 text-base font-normal leading-normal not-italic bg-searchbar-fill outline-none"
    const classes = `${searchImg}`

    return (
        <>
            <div className={base}>
              <span className="flex w-5 p-px justify-center items-center shrink-0 "> 
                <svg className={searchImg} width={17} height={17}> 
                </svg>
              </span>
              <input type="search" className={inputClasses} placeholder="search" />
            </div>
        </>
    )
}