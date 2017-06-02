import Data from './Data'

const run = (ctx) => {
    Data.getX().forEach((x) => {
        ctx.fillRect(x[0],x[1],2,2)
    })
}

const MainTask = { run }
export default MainTask