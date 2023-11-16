export async function postAdmin(adminForm, navigate){
    try {
        const response = await fetch('https://chale1.exdrans.xyz/register',{
            method: 'post',
            body: JSON.stringify(adminForm),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok){
            throw response
        }
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}