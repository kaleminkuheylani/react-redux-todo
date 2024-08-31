import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { add, remove } from '../app/redux/actions/todoReducer/todo';

function App() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const [id, setID] = useState(Date.now().toString());
  const [item, setItem] = useState('');
  const [search, setSearch] = useState('');
  

  function getRandom(arr){
    const randomNumber=Math.floor(Math.random()*arr.length);
    return arr[randomNumber];
  }
  const randomColor=()=>{
    var color="#"
    const arr=["a","b","c","d","e","f","1","2","3","4","5","6"];
    for (let i=0;i<6;i++){
      color+=getRandom(arr)
    }
    return color;
 }

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(add({ id, item }));
    setItem('');
    setID(Date.now().toString());
  };

  const filteredItems = products.
  filter(product => product.item.toLowerCase().includes(search.toLowerCase()))
    .map(product => (
      <div className="flex flex-row"key={product.id}  >
        <div className="w-1/2 flex justify-center items-center "style={{backgroundColor:`${randomColor()}`}}>{product.item}</div>
        <button  
          className='w-1/2 h-12 text-white'style={{backgroundColor:`${randomColor()}`}}
          onClick={() => dispatch(remove(product.id))}
        >SIL
        </button>
      </div>
    ));
  
  return (
    <>
      <form onSubmit={formHandler}>
          <h1 className='text-center text-4xl'>NE SATIN ALMAK İSTERSİN?</h1>
          <input
            type='text'
            className='w-1/3 h-12 border-2 my-5'
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder='Ne alacaksın?'
          />
         
          <input
            type='text'
            className='w-1/3 h-12 border-2'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Ara...'
          />
           <input
            type='submit'
            className='w-1/3 h-12 bg-red-400  text-white'
            value='Satın al'
          />
      </form>

      <div className='w-full h-12 text-center text-white'>
        {filteredItems.length?(filteredItems):(<p className='text-black bg-white'>No todo found</p>)}
      </div>
    </>
  );
}

export default App;
