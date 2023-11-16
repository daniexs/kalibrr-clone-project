import {useState} from "react"
export default function useLoading() {
    const [isLoading, setIsLoading] = useState(false)

    const handleClose = () => setIsLoading(false);
    const handleShow = () => setIsLoading(true);

    return [isLoading, handleClose, handleShow];
}