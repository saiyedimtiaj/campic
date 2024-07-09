import team1 from "../../assets/ourteam-1-1 (1).webp"
import team2 from "../../assets/ourteam-1-1 (4).webp"
import team3 from "../../assets/ourteam-1-1 (5).webp"

const Teams = () => {
    return (
        <div className="max-w-6xl mx-auto px-5 my-20">
            <h1 className="text-5xl font-bold text-center">Meet Our Team</h1>
            <div className="grid grid-cols-1 mt-14 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex items-center flex-col justify-center gap-y-3">
                    <img src={team1} alt="" />
                    <h1 className="text-2xl font-medium">Adreana Stone</h1>
                    <p>CEO</p>
                </div>
                <div className="flex items-center flex-col justify-center gap-y-3">
                    <img src={team2} alt="" />
                    <h1 className="text-2xl font-medium">Jhoney Deep</h1>
                    <p>Developer</p>
                </div>
                <div className="flex items-center flex-col justify-center gap-y-3">
                    <img src={team3} alt="" />
                    <h1 className="text-2xl font-medium">Mariya Gotze</h1>
                    <p>Maneger</p>
                </div>
            </div>
        </div>
    );
};

export default Teams;