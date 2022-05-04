import { useState } from 'react'
import { Card, styled, Box, Typography } from '@mui/material'

const Image = styled("img")({
    width: "100%",
    height: 200
})

const Component = styled(Card)`
width: 200px;
margin: 5px;
position: relative;
`
const Container = styled(Box)`
position: absolute;
top: 0;
color: #FFFFFF;
height: 300%;
width: 100%;
background: #000;
opacity: 0.5;
`
const Character = ({ value }) => {
    const [toggle, setToggle] = useState(false)

    const toggleHover = () => {
        setToggle(!toggle);
    }

    return (
        value.characterImageFull ?
            <Component onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <Image src={value.characterImageFull} alt="picture" />
                {
                    toggle ?
                        <Container>
                            <Typography>
                                Name :{value.characterName}
                            </Typography>
                            <Typography>
                                Real Name :{value.actorName}
                            </Typography>
                            <Typography>
                                HouseName :{value.houseName}
                            </Typography>
                            <Typography>
                                NickName :{value.nickname}
                            </Typography>
                        </Container>
                        : ""
                }

            </Component>
            : ""
    )
}

export default Character