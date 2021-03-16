import React , { useState } from 'react';
import Button from '../components/button/button';
import testStyle from './testScreenStyle.module.scss';
import Block from '../components/Blocks/block';
import ProgressBar from '../components/progressBar/progressBar';
import CheckBox from '../components/checkBox/checkBox';
import Text from './../components/Text/text';
import RadioButton from '../components/radioButton/radioButton';
import InputDesktop from '../components/InputDesktop/InputDesktop';
import InputSearch from '../components/inputSearch/inputSearch';
import Icon from '../components/icons/icons';
import SideNav from '../components/sideNav/sideNav';
import { BrowserRouter } from 'react-router-dom';
import Badge from '../components/Badge/badge';
import Tab from '../components/tab/tab';
import Dropdown from "../components/dropdown/dropdown";
import Collapse from '../components/collapse/collapse';
import Modal from '../components/Modal/modal';
import Table from "../components/table/table";



const TestScreen = () => {

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Click!');
    }

    const hamburger = (event) => {
        event.preventDefault();
        alert('Hamburger!');
    }

    const toggleModalFirst = () => {
        setModalIsOpenFirst(!modalIsOpenFirst);
        console.log(modalIsOpenFirst);
    };

    const [modalIsOpenFirst, setModalIsOpenFirst] = useState(false);

    const toggleModalSecond = () => {
        setModalIsOpenSecond(!modalIsOpenSecond);
        console.log(modalIsOpenSecond);
    };

    const [modalIsOpenSecond, setModalIsOpenSecond] = useState(false);

    const optionsItems = [
            {label: 'add', onClick: () => console.log('add')},
            {label: 'delete', onClick: () => console.log('delete')}
        ];
    
    const fetchData =  {'Dues': [
            {
                dataFields: {
                    name: 'Ilya Tsvetkov',
                    userStatus: 'active',
                    paymentStatus: 'Overdue',
                    amount: '$50'
                },
                expand: [
                    {date: '12/APR/2021',
                    userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
                    email: 'sabaka@sabaka.com'},
                    {date: '08/APR/2022',
                    userActivity: 'and it`s Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
                    email: '123#11daw.cvetkov@gmail.com'}
            ]},
            {
                dataFields: {
                    name: 'Artem Skurjat',
                    userStatus: 'active',
                    paymentStatus: 'Overdue',
                    amount: '$50'
                },
                expand: [
                    {date: '12/APR/2020',
                    userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
                    email: 'artem.srutckovskij12351@inox.lv'},
                    {date: '08/APR/2020',
                    userActivity: 'and it`s Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
                    email: ' email:@gmail.mail'}
                ]
            }
          ]}

    

    return (
        <BrowserRouter>
            <div>
                <header >
                </header>
                <body className={testStyle.body}>
                    <SideNav menuComponents={[
                        {label: 'Overview', link: '/overview', iconType: 'overview'},
                        {label: 'Transactions', link: '/transactions', iconType: 'transactions'},
                        {label: 'Cards', link: '/cards', iconType: 'cards'},
                        {label: 'Inovices', link: '/inovices', iconType: 'inovices'},
                        {label: 'Goals', link: '/goals', iconType: 'goals'},
                        {label: 'Settings', link: '/settings', iconType: 'settings'}
                        ]}/>
                    <div className={testStyle.content}>
                        <div className={testStyle.test}>
                            <div className={testStyle.testRow}>
                                <Button onClick={handleClick} medium gray className={testStyle['sampleClass']}><div>Button M</div></Button>
                                <Button medium blue><div>Button M</div></Button>
                                <Button medium white><div>Button M</div></Button>
                                <Button medium continue><div>Continue</div></Button>
                            </div>
                            <div className={testStyle.testRow}>
                                <Button small gray><div>Button S</div></Button>
                                <Button small blue><div>Button S</div></Button>
                                <Button small white><div>Button S</div></Button>
                                <Button small bookmark><div>Bookmark</div></Button>
                            </div>
                            <div className={testStyle.testRow}>
                                <Button xSmall gray><div>XSmall</div></Button>
                                <Button xSmall blue><div>XSmall</div></Button>
                                <Button xSmall white><div>XSmall</div></Button>
                                <Button small delete><div>Delete</div></Button>
                            </div>
                            <div className={testStyle.testRow}>
                                <Button pen gray/>
                                <Button pen blue/>
                                <Button pen white/>
                                <Button hamburger onClick={hamburger}/>
                            </div>
                        </div>
                        <Block big>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aut corporis excepturi minima nihil, quibusdam reiciendis? In iusto placeat quidem. Adipisci assumenda autem eveniet fugiat molestias non, perspiciatis quo!</Block>
                        <ProgressBar value={30} danger className={testStyle.progressBarTest}/>
                        <ProgressBar value={20} className={testStyle.progressBarTest}/>
                        <ProgressBar value={40} success className={testStyle.progressBarTest}/>
                        <ProgressBar value={55}/>
                        <div className={testStyle.test}>
                            <div className={testStyle.testRow}>
                                <CheckBox onChange={() => console.log('Checkbox changed')}/>
                                <CheckBox checked={true} onChange={() => console.log('Checkbox changed')}/>
                            </div>
                        </div>
                        <div>
                            <Text h1>H1 HEAD</Text>
                            <Text h2>H2 Headline</Text>
                            <Text h3>H3 Headline</Text>
                            <Text h4>H4 Headline</Text>
                            <Text h5>H5 Headline</Text>
                            <Text h6 right>H6 Headline</Text>
                            <Text bodyBig justify>Body big</Text>
                            <Text bodyMain left>Body 1</Text>
                            <Text subtitle>Subtitle</Text>
                            <Text button>BUTTON</Text>
                            <Text bodySmall>Body 2</Text>
                            <Text caption>Caption</Text>
                            <Text overline>OVERLINE</Text>
                        </div>
                        <RadioButton checked={1} items={['some.label.id', 'some.label.id2', 'some.label.id3', 'some.label.id4', 'some.label.id5']} />
                        <RadioButton checked={0} items={['1', '2', '3', '4', '5']} onChange={() => console.log('RadioButton changed')}/>
                        <div className={testStyle.testRow + ' ' + testStyle.notVisible}>
                            <Icon type="cards" className={testStyle.testIcon}/>
                            <Icon type="goals"/>
                            <Icon type="inovices"/>
                            <Icon type="overview"/>
                            <Icon type="settings"/>
                            <Icon type="transactions"/>
                            <Icon type="bookmark"/>
                            <Icon type="check"/>
                            <Icon type="cross"/>
                            <Icon type="disabled"/>
                            <Icon type="downArrow"/>
                            <Icon type="hamburger"/>
                            <Icon type="lock"/>
                            <Icon type="rightArrow"/>
                            <Icon type="trashCan"/>
                            <Icon type="upArrow"/>
                            <Icon type="whitePen"/>
                            <Icon type="blackPen"/>
                            <Icon type="bluePen"/>
                            <Icon />
                        </div>
                        <div>
                            <InputDesktop  placeholder = 'Empty Input' label = 'Cardholder Name' onChange = {(value) => {console.log(value)}}/>
                            <InputDesktop placeholder = 'Empty Input' label = 'Confirmed input' successful onChange = {(value) => {console.log(value)}} />
                        </div>
                        <div>
                            <InputSearch small onChange = {(value) => {console.log(value)}} />
                            <br/>
                            <InputSearch big onChange = {(value) => {console.log(value)}} />
                        </div>
                        <div>
                            <Badge label="testing" />
                            <Badge label="testing" success />
                            <Badge label="testing" error />
                            <Badge label="testing" warning />
                            <Badge label="testing" disabled />
                        </div>
                        <div>
                            <Tab className={testStyle['sampleClass']}  tabs={[{label:'Paid', content: <div filter='Paid'>it`s content</div>},
                              {label:'UnPaid', content: <span>i`m a String</span>},
                              {label: 'Buttons', content : <Button xSmall gray><div>XSmall</div></Button>},
                              {label: 'TestTab', content: <Block big><Icon type="trashCan"/></Block>}]} />
                        </div>
                        <div>
                            <Dropdown label="click here" items={[{label: 'item 1', link: '/dashboard'}, {label: 'item2', onClick: () => {console.log('chosen 2nd option!')}}]} />
                            <Dropdown disabled label="click here" items={[{label: 'item 12', link: '/dashboard'}, {label: 'item2', onClick: () => {console.log('chosen 2nd option!')}}]} />
                        </div>
                        <div>
                            <Collapse
                                label="Click on me to expand"
                                content={
                                <div>
                                    Expandet content
                                    <div className={testStyle.testRow}>
                                        <Button onClick={handleClick} medium gray className={testStyle['sampleClass']}><div>Button M</div></Button>
                                        <Button medium blue><div>Button M</div></Button>
                                        <Button medium white><div>Button M</div></Button>
                                        <Button medium continue><div>Continue</div></Button>
                                    </div>
                                    <div className={testStyle.testRow}>
                                        <Button small gray><div>Button S</div></Button>
                                        <Button small blue><div>Button S</div></Button>
                                        <Button small white><div>Button S</div></Button>
                                        <Button small bookmark><div>Bookmark</div></Button>
                                    </div>
                                    <div className={testStyle.testRow}>
                                        <Button xSmall gray><div>XSmall</div></Button>
                                        <Button xSmall blue><div>XSmall</div></Button>
                                        <Button xSmall white><div>XSmall</div></Button>
                                        <Button small delete><div>Delete</div></Button>
                                    </div>
                                </div>
                            }/>

                        </div>
                        <div>
                            <Button onClick={toggleModalFirst}>Modal</Button>
                            <Modal toggleModal={toggleModalFirst} modalIsOpen={modalIsOpenFirst} buttons={{yes: () => {console.log('yes clicked!')}, no: toggleModalFirst}} small buttonsInColumn={false}>
                                    Hello, it's a me Mario!
                            </Modal>
                            <Button onClick={toggleModalSecond}>Modal</Button>
                            <Modal toggleModal={toggleModalSecond} modalIsOpen={modalIsOpenSecond} buttons={{yes: () => {console.log('yes clicked!')}, no: toggleModalSecond}} medium buttonsInColumn={true}>
                                Test!
                            </Modal>
                            <Dropdown label="click here" items={[{label: 'item 1', link: '/dashboard'}, {label: 'item2', onClick: () => {console.log('chosen 2nd option!')}}]} />
                            <Dropdown disabled label="click here" items={[{label: 'item 12', link: '/dashboard'}, {label: 'item2', onClick: () => {console.log('chosen 2nd option!')}}]} />
                        </div>
                        <Table  filter
                                search={'Custom Table search'}
                                headerButton={{label: 'Pay dues', onClick: () => {console.log('Pay dues clicked')}}}
                                options={optionsItems}
                                data={fetchData.Dues}
                                fields={[
                                    {label: 'Name', name: 'name'},
                                    {label: 'User Status', name: 'userStatus', type: 'badge'},
                                    {label: 'Payment Status', name: 'paymentStatus',type: 'badge'},
                                    {label: 'Amount', name: 'amount'}
                                ]} 
                                expand={[
                                    {label: 'date', name: 'date'},
                                    {label: 'user activity', name: 'userActivity'},
                                    {label: 'email', name: 'email'},
                                    {label: 'detail', name: 'detail'}
                                ]}/>
                    </div>
                </body>
            </div>
        </BrowserRouter>
    );
}

export default TestScreen;
