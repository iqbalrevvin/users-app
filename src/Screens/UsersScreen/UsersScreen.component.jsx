/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { iconBack, iconList, iconMapPoint } from '../../Assets/Icons';
import CHeader from '../../Components/CHeader';
import CListItem from '../../Components/CListItem';
import CLoading from '../../Components/CLoading';
import { randomRangeNumber } from '../../Utility/Functions';
import CDetailUser from './Components/CDetailUser';
import CMapsUsers from './Components/CMapsUsers';
import { getUsersApi } from './UsersScreen.action';
import styles from './UsersScreen.styles';

const _getStates = () => {
    const [loading, setLoading] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const [userSelected, setUserSelected] = React.useState(null);
    const [contentType, setContentType] = React.useState('list');
    return { 
        loading, setLoading, userSelected, setUserSelected,
        users, setUsers, contentType, setContentType 
    };
};

const _handleLeftClickNav = (props, states) => {
    if(states.contentType === 'maps'){
        states.setContentType('list');
    } else if (states.contentType === 'detail') {
        states.setContentType('list');
    } else {
        props.navigation.goBack();
    }
};

const _handleRightClickNav = (states) => {
    if(states.contentType === 'list'){
        states.setContentType('maps');
    } else {
        states.setContentType('list');
    }
};

const _getHeaderProps = (props, states) => ({
    title: 'Users',
    iconLeft: iconBack,
    onPressLeft: () => _handleLeftClickNav(props, states),
    iconRight: states.contentType === 'list' ? iconMapPoint : iconList,
    onPressRight: () => _handleRightClickNav(states),
});

const _handlePressItemUser = (item, states) => {
    console.log(item);
    states.setUserSelected(item);
    states.setContentType('detail');
};

const _renderItemList = ({item}, states) => (
    <TouchableOpacity style={styles.itemListContainer} 
      onPress={() => _handlePressItemUser(item, states)}>
        <CListItem
          name={`${item.first_name} ${item.last_name}`}
          email={item.email}
          avatar={item.avatar}
        />
    </TouchableOpacity>
);

const _renderListContent = (states) => (
    <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item?.id.toString()}
          data={states.users}
          renderItem={(item) => _renderItemList(item, states)}
        />
    </View>
);

const _renderMapContent = (states) => {
    const { users } = states;
    return(
        <View style={styles.mapContainer}>
            <CMapsUsers users={users} userSelected={states.userSelected}
              onPressMarker={(item) => states.setUserSelected(item)}
              onPressButtonSelect={() => states.setContentType('detail')} />
        </View>
    );
};

const _renderDetailUserContent = (props, states) => (
    <View style={styles.detailUserContainer}>
        <CDetailUser user={states.userSelected} {...props} />
    </View>
);

const _getResponseData = async (states) => {
    const response = await getUsersApi();
    if(response?.data){
        const usersData = response?.data?.data;
        const mappingUsersData = usersData?.map(item => {
            const randomLng = -122+'.'+randomRangeNumber(4300, 4524);
            return {
                ...item,
                latitude: 37.78825,
                longitude: Number(randomLng),
            };
        });
        states.setUsers(mappingUsersData);
    }
};

const _handleGetUsersData = async (states) => {
    states.setLoading(true);
    try {
        await _getResponseData(states);
        states.setLoading(false);
    } catch (error) {
        console.log('UsersScreen.component@_handleGetUsersData', error);
        states.setLoading(false);
    }
};

const _getUsersDataEffect = (states) => {
    React.useEffect(() => {
        _handleGetUsersData(states);
    },[]);
};

// eslint-disable-next-line complexity
const UsersScreenComponent = (props) => {
    const states = _getStates();
    _getUsersDataEffect(states);
    const {loading, contentType } = states;
    return(
        <React.Fragment>
            {loading && <CLoading />}
            <CHeader {..._getHeaderProps(props, states)} />
            {contentType === 'list' && _renderListContent(states)}
            {contentType === 'maps' && _renderMapContent(states)}
            {contentType === 'detail' && _renderDetailUserContent(props, states)}
        </React.Fragment>
    );
};

export default UsersScreenComponent;
