import './App.css';
import Employee from './Employee';
import StartButton from './StartButton';
import Stationary from './Stationary';

function App() {
    // For Question Number 1
    const StyledButton = {
        backgroundColor: 'lightgreen',
        color: 'darkgreen',
        borderRadius: '5px',
        padding: '10px'
    };

    // For Question Number 2
    const header = 'Stationary Items';
    const items = ['pen', 'pencil', 'ruler', 'eraser'];
    return (
        <div>
            {/* Question Number 1 */}
            <Employee name={'Harsh'} designation={'Software Engineer'} education={'Under Graduate'} />
            ------------------------
            {/* Question Number 2 */}
            <StartButton StyledButton={StyledButton} />
            ------------------------
            {/* Question Number 3 */}
            <Stationary header={header} items={items} />
            ------------------------
            {/* Question Number 4 */}
            
        </div>
    );
}

export default App;
