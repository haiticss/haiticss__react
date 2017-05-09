import React, { Component } from 'react';
import { Block, Box, Crop, Flag, Layout, ListBare, Ratio, Table, Wrapper } from './Objects';
import { PlayGround } from './PlayGround';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Objects__Block</h1>
        <hr/>
        <Block className="o-block--debug" spacing="large" alignment="right" stretch>
            <Block.Header>
                <p className="m-heading--small">Header lorem</p>
            </Block.Header>
            <Block.Body>
                <p>Body ipsum dolor sit amet, consectetur adipisicing elit. Animi, aut, dicta dignissimos esse inventore ipsa laudantium mollitia numquam odit, saepe similique voluptates? Esse fugiat harum incidunt porro quis, repudiandae voluptates.</p>
            </Block.Body>
            <Block.Footer>
                <p>Footer dolor</p>
            </Block.Footer>
        </Block>
        <h1>Objects__Box</h1>
        <hr/>
        <Box className="o-box--debug" spacing="large">
          <Box.Content>
              <p>Body ipsum dolor sit amet, consectetur adipisicing elit. Animi, aut, dicta dignissimos esse inventore ipsa laudantium mollitia numquam odit, saepe similique voluptates? Esse fugiat harum incidunt porro quis, repudiandae voluptates.</p>
          </Box.Content>
        </Box>
        <h1>Objects__Crop</h1>
        <hr/>
        <Crop className="o-crop--debug">
            <Crop.Content alignment="center">
                <img alt="" src="https://dummyimage.com/1024x768/fff7ed/c25e00.jpg" />
            </Crop.Content>
        </Crop>
        <h1>Objects__Flag</h1>
        <hr/>
        <Flag className="o-flag--debug" spacing="medium" alignment="middle" flip>
          <Flag.Img>
              <img alt="" src="https://dummyimage.com/256x256/fff7ed/c25e00.jpg" />
          </Flag.Img>
          <Flag.Body>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fuga illum iure molestiae, mollitia optio rerum! Culpa inventore itaque perferendis veniam voluptas. Animi facere fugit magnam nesciunt, perferendis veritatis voluptates.</p>
          </Flag.Body>
        </Flag>
        <h1>Objects__Layout</h1>
        <hr/>
        <Layout className="o-layout--debug" spacing="tiny" v-alignment="bottom" h-alignment="right" flip>
            <Layout.Item>

            </Layout.Item>
        </Layout>
        <h1>Objects__ListBare</h1>
        <hr/>
        <ListBare className="o-list-bare--debug">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum dolor sit amet consecteur elit</li>
        </ListBare>
        <h1>Objects__Ratio</h1>
        <hr/>
        <Ratio className="o-ratio--debug" ratio="3:2">
            <img className="o-ratio__content" alt="" src="https://dummyimage.com/1024x1024/fff7ed/c25e00.jpg" />
        </Ratio>
        <h1>Objects__Table</h1>
        <hr/>
        <Table className="o-table--debug" spacing="small">
            <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <th>Lorem</th>
                </tr>
                <tr>
                    <td>Dolor sit amet</td>
                    <td>Ipsum</td>
                </tr>
                <tr>
                    <td>Consecteur elit</td>
                    <td>Dolor</td>
                </tr>
            </tbody>
        </Table>
        <h1>Objects__Wrapper</h1>
        <hr/>
        <Wrapper className="o-wrapper--debug" from="sml" to="sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fuga illum iure molestiae, mollitia optio rerum! Culpa inventore itaque perferendis veniam voluptas. Animi facere fugit magnam nesciunt, perferendis veritatis voluptates.</p>
        </Wrapper>
      <PlayGround className="o-wrapper--debug" object={Wrapper}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fuga illum iure molestiae, mollitia optio rerum! Culpa inventore itaque perferendis veniam voluptas. Animi facere fugit magnam nesciunt, perferendis veritatis voluptates.</p>
      </PlayGround>
      </div>
    );
  }
}

export default App;
