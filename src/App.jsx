import MasterRoute from './routing/masterRoutesRouting';
// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return <MasterRoute />;
}

export default App;
