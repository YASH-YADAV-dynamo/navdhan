import { LoginScreen, SplashScreen } from '../components';

export default function Home() {
  return (
    <SplashScreen duration={4000}>
      <LoginScreen />
    </SplashScreen>
  );
}
