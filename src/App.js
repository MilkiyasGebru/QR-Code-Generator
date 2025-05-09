import './App.css';
import QRCode from "react-qr-code";
import {useState} from "react";
function App() {

    const [code, setCode] = useState('');

    return (
        <>
            <div>
                <nav className="text-4xl text-center mb-4 border-b py-4 border-gray-200 bg-gray-100">QR Code Generator
                </nav>
                <div className="flex flex-col p-8 justify-center w-full items-center ">
                    <QRCode value={code}/>

                    <div className="flex flex-col mt-4">
                        <label htmlFor="code" className="text-2xl mb-2">Enter your content:</label>
                        <textarea id="code"  value={code} onChange={(e) => setCode(e.target.value)}
                                  className="resize-none px-3 py-2 rounded-md border border-gray-400 min-w-[600px] min-h-[200px]"
                        />

                    </div>
                </div>
            </div>

        </>
    )
}

export default App;
