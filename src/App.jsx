import './App.css';
import Employee from './Employee';
import StartButton from './StartButton';
import Stationary from './Stationary';
import Products from './Products';
import Prodcuts2 from './Products2';
import Student from './Student';
import ImageWithCaption from './ImageWithCaption';

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

  // For Question Number 4
  const imageLink = 'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg';
  const caption = 'Spring Flowers';

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
      <ImageWithCaption image={imageLink} caption={caption} />
      ------------------------
      {/* Question Number 5 */}
      <Products />
      ------------------------
      {/* Question Number 6 */}
      <Prodcuts2 />
      ------------------------
      {/* Question Number 7 */}
      <Student />
    </div>
  );
}

export default App;
