function Tab({text, type}) {

    const base = 'flex justify-center items-center pb-4 text-neutral-400 '
    const active = 'rounded active:text-neutral-50 active:border-twitter-blue focus:text-neutral-50 focus-within:border-twitter-blue focus-within:border-b-4 hover:bg-neutral-900'
    
    const tab ={
    forYou : 'min-w-20 pb-4  flex-col gap-4',
    following: ''
    } 
    
    const classes = `${base} ${active} ${tab[type]}`
    
    return (
    <>
      <button  className={classes}>
        {text}
      </button>    
    </>

    )
}

export default Tab