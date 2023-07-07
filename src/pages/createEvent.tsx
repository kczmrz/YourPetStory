import NewEvent from "@/components/createEvent/NewEvent"
import FindVetsNearby from "@/utils/FindVetsNearby"

export default function CreateEvent() {
    FindVetsNearby("zgierz").then((res) => {
        console.log(res)
    })

    return (<> 
        <NewEvent />
        </>
    )
}