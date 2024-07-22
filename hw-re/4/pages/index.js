function BookCard ({title, author, styles}) {
return(
  <div class = 'book'>
  <h3>{author}</h3>
  <h1>{title}</h1>
  <style>{styles}</style>
 </div>
)
}

const styleCard = ".book {text-align: center; border: 2px solid blue; border-radius: 15px; padding: 10px }"

function BookShelf  ({styles}) {
  const boocks = [ 
<BookCard title = 'Колобок'
    author = 'Народна'
    styles = {styleCard}/>,
<BookCard title = 'Спотворюють Реальність'
    author = 'Олексій Атаманов'
    styles = {styleCard}/>,
<BookCard title = 'Відьмак'
    author = 'Анджей Сапковсткий'
    styles = {styleCard}/>]
return (
  <div class = 'boocksshelf'>
    {boocks.map((item) => (<p key={item}>{item}</p>))}
    <style>{styles}</style>
  </div>
)
}


export default function LibraryPage (){
  return <BookShelf styles= '.boocksshelf{display: flex; justify-content: center; gap: 32px}'/>

}