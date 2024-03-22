// import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
// import React from 'react'
// import { data } from '../constant/OnboardingData'

// export default function Onboarding() {
//     const { width } = useWindowDimensions()
//     return (
//         <View style={styles.contain} >
//             <FlatList horizontal pagingEnabled
//                 data={data}
//                 renderItem={({ item }) => <Image style={{ width: width, height: 800, objectFit: "cover" }} source={item.url} title={item.name} />}
//                 keyExtractor={item => item.id}
//             />
//             <Text style={{ position: 'absolute', fontSize: 20}}>Swim
//             </Text>
//         </View>

//     )
// }

// const styles = StyleSheet.create({
//     contain: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })

import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { data } from '../constant/OnboardingData';


export default function Onboarding() {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
           
            <FlatList
                horizontal
                pagingEnabled
                data={data}
                renderItem={({ item }) => (
                    <View style={{ width: width }}>
                        <Image
                            style={{ width: '100%', height: 800, objectFit: 'cover' }}
                            source={item.url}
                        />
                        <Text style={styles.name}>{item.name}</Text>

                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        position: 'absolute',

        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    name: {
        position: 'absolute',
        top: 300,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 54,
        fontWeight:"bold",
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
});
