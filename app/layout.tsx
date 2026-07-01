import '../styles/globals.css';
import Navbar from './navbar/page';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
                <Navbar></Navbar>
				{children}
			</body>
		</html>
	)
}