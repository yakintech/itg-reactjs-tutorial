import ProductBox from "./props/ProductBox";
import UserDetail from "./props/UserDetail";

function App() {

  return <>
  <ProductBox name="IPhone" unitPrice={5000} points={[3,5,4,7]}/>
  <UserDetail name="Murat" surname="Yılmaz" age={20} />

  </>


}

export default App;


//props, state, effect


