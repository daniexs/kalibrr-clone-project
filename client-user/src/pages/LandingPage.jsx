import { useDispatch, useSelector } from "react-redux"
import Card from "../components/Card"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { fecthJobs } from "../store/actions"
import MyVerticallyCenteredModal from "../components/Modal"
import useLoading from "../hooks/useLoading"

function LandingPage(){
  const dispatch = useDispatch()
  const dataJobs = useSelector(state => state.jobs.data)
  const [modalShow, setModalShow] = useState(false)
  const [isLoading, handleClose, handleShow] = useLoading()

  if (isLoading) {
    return (
      <>
        <div className="container">
          <img src="https://media2.giphy.com/media/dWacKLne4EowGUaVUw/giphy.gif?cid=6c09b9526awtdoxs2vxkgqn7cmfp5vysh2l4y5wavpaj71ak&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
        </div>
      </>
    );
  }


  let itemsElements = null;
  if (modalShow === true) {
    itemsElements = <MyVerticallyCenteredModal onHide={() => setModalShow(false)} />
  }

  useEffect(() => {
    
    dispatch(fecthJobs(handleShow))
  }, [])
  
  return (
    <>
    <div id="__next" data-reactroot="">
      <div className="k-flex k-flex-col k-items-stretch k-min-h-screen k-bg-body">
        <Navbar/>
        <main className="k-flex-grow">
          <Header/>
          <div className="k-px-4 md:k-px-10 k-flex k-flex-col">
            <div className="">
              <div
                itemScope=""
                itemType="http://schema.org/ItemList"
                className="k-container k-grid k-grid-cols-1 md:k-grid-cols-2 xl:k-grid-cols-3 k-gap-4 k-mt-8 k-mb-10"
              >
                
                {dataJobs.map(el=>{
                  return (
                    <Card key={el.id} data={el} onShow={() => setModalShow(true)} />
                  )
                })}
                
                
              </div>
            </div>
            <div className="k-font-dm-sans k-w-full k-flex k-justify-center k-mb-10">
              <button className="k-btn-primary">Load more jobs</button>
            </div>
          </div>
        </main>
      </div>
    </div>

    


    <div>
      {itemsElements}
    </div>
    </>
  )
}

export default LandingPage
