import { MovingLines } from '@arwes/react'
import BgPuffs from './puffs'
import { theme } from '../utlis/settings'

const Background = () => {
    return (
        <div className="bg-big fixed bg-center bg-cover bg-no-repeat w-full  h-full">
            <MovingLines
                lineColor={theme.colors.primary.deco(2)}
                lineWidth={3}
            />
            <BgPuffs />
        </div>
    )
}

export default Background
