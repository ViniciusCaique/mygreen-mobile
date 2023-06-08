import { StatusBar } from 'react-native';
// import { Home } from './src/screens/Home';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle={'light-content'} />
    </>
  );
}
