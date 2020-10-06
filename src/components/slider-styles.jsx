import styled from 'styled-components'

const SlideContainer = styled.ul`
    margin-left: ${props => (props.marginAdjustment)};
    overflow:hidden;
    width:1000%;
    margin:0;
`

export default SlideContainer;