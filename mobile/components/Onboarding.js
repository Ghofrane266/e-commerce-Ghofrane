// // import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
// // import React from 'react'
// // import { data } from '../constant/OnboardingData'

// // export default function Onboarding() {
// //     const { width } = useWindowDimensions()
// //     return (
// //         <View style={styles.contain} >
// //             <FlatList horizontal pagingEnabled
// //                 data={data}
// //                 renderItem={({ item }) => <Image style={{ width: width, height: 800, objectFit: "cover" }} source={item.url} title={item.name} />}
// //                 keyExtractor={item => item.id}
// //             />
// //             <Text style={{ position: 'absolute', fontSize: 20}}>Swim
// //             </Text>
// //         </View>

// //     )
// // }

// // const styles = StyleSheet.create({
// //     contain: {
// //         flex: 1,
// //         backgroundColor: '#fff',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// // })

// import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
// import React from 'react';
// import { data } from '../constant/OnboardingData';


// export default function Onboarding() {
//     const { width } = useWindowDimensions();

//     return (
//         <View style={styles.container}>

//             <FlatList
//                 horizontal
//                 pagingEnabled
//                 data={data}
//                 renderItem={({ item }) => (
//                     <View style={{ width: width }}>
//                         <Image
//                             style={{ width: '100%', height: 800, objectFit: 'cover' }}
//                             source={item.url}
//                         />
//                         {/* <Text style={styles.name}>{item.name}</Text>

//                         <Text style={styles.description}>{item.description}</Text> */}
//                     </View>
//                 )}
//                 keyExtractor={item => item.id.toString()} 
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     description: {
//         position: 'absolute',

//         bottom: 30,
//         left: 0,
//         right: 0,
//         textAlign: 'center',
//         fontSize: 20,
//         color: '#fff',
//         paddingHorizontal: 30,
//         paddingVertical: 50,
//     },
//     name: {
//         position: 'absolute',
//         top: 300,
//         left: 0,
//         right: 0,
//         textAlign: 'center',
//         fontSize: 54,
//         fontWeight:"bold",
//         color: '#fff',
//         paddingHorizontal: 30,
//         paddingVertical: 50,
//     },
// });
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { data } from "../constant/OnboardingData";
import NextButton from "./Nextbutton";


export default function Onboarding() {
  // const { width } = useWindowDimensions();
  console.log(width);
  return (
    <View style={[styles.container, { marginTop: 30 }]}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        contentContainerStyle={{ paddingRight: 0 }}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 0, width }}>
            <Image source={item.url} style={[styles.image, { width:100, borderRadius: 50 }]} />
            <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <NextButton percentage={(index + 1) * (100 / data.length)} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 800
  },
  title: {
    fontWeight: "600",
    fontSize: 28,
    marginBottom: 10,
    color: "#00AFB9",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    textAlign: "center",
    color: "#14366F",
    paddingHorizontal: 64,
  },
});