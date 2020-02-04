const { useEffect, useState } = React;

export default function App() {
	const [guests, setGuests] = useState([]);
	useEffect(() => {
		fetch("./api/guests").then(response => {
			setGuests(response);
		});
	});
	return (
		<div>
			<ul>
				{guests.map(guest => (
					<li>guest.name</li>
				))}
			</ul>
		</div>
	);
}
