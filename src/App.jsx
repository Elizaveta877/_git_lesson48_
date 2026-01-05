import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  return (
    <Router>
    
      <div className="min-h-screen w-full bg-linear-to-r from-red-600 to-green-700 flex flex-col items-center">
        <Header />
        
        <main className="w-full max-w-md p-4 mt-10">
          <Routes>
            <Route path="/" element={
              <div className="text-center p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                <h2 className="text-white text-4xl font-black italic drop-shadow-lg">
                  Merry Christmas <br/> & <br/> Happy New Year! 🎄
                </h2>
                <p className="text-white/80 mt-4 font-medium">Оберіть розділ вище, щоб почати</p>
              </div>
            } />
            <Route path="/form" element={<Form />} />
            <Route path="/cards" element={<Card title="Наша Картка" description="Вітаємо всіх з Новим Роком! Та бажаємо успіхів у навчанні!" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;