export default function Teams() {
    const teamBio = [
        {
            name: "Sachin",
            country: "India",
            age: 30,
            badge: 1
        },
        {
            name: "Babar",
            country: "Pakistan",
            age: 32,
            badge: 2
        },
        {
            name: "Malinga",
            country: "Shree Lanka",
            age: 25,
            badge: 3
        },
        {
            name: "Jubair",
            country: "Bangladesh",
            age: 28,
            badge: 4
        }
    ]

    return (
        <>
            <h2>IPL Team</h2>
            {
                teamBio.map(item => (
                    <Cricketer data={item} key={item.badge} />
                ))
            }
        </>
    )
}

function Cricketer({ data }) {
    return (
        <div style={{ border: '1px solid red', margin: '20px', width: '400px' }}>
            <h3>Player Name: {data.name}</h3>
            <h3>Player Country: {data.country}</h3>
            <h3>Player Age: {data.age}</h3>
            <h3>Player Badge: {data.badge}</h3>
        </div>
    )
}