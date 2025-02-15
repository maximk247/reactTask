import Header from './components/Header';
import Text from './components/Text';
import List from './components/List';

const App = () => {
  const headerText = 'Динамический заголовок';
  const paragraphText = 'Это динамический абзац, который передается как пропс.';
  const listItems = [
    'Динамический элемент списка 1',
    'Динамический элемент списка 2',
    'Динамический элемент списка 3',
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          maxWidth: '600px',
          width: '100%',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <Header title={headerText} />
        <Text content={paragraphText} />
        <List items={listItems} />
      </div>
    </div>
  );
};

export default App;
