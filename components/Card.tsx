import React from 'react'
import { View, StyleSheet, Image, ImageSourcePropType, Pressable } from 'react-native'
import AppText from './AppText';
import colors from '@/constants/Colors';
import { Href, Link } from 'expo-router';

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

interface Props {
    title: string;
    subtitle: string;
    href: Href;
    imageUrl: string
}

export default function Card({ title, subtitle, imageUrl, href }: Props) {
    return (
        <Link href={href} asChild>
            <Pressable>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{ uri: imageUrl }}
                    />
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} text={title} />
                        <AppText style={styles.subtitle} text={subtitle} />
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})