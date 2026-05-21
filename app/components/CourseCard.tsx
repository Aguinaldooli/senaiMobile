import { View, Text, Pressable, Image,} from "react-native";
import { useState } from "react";
import styles from "../css/style";

type propsCourseCard = {
    title: string;
    describe: string;
    likes: number;
    image: any;
    onPress?: any;
}

export default function CourseCard({ title, describe, likes, image, onPress }: propsCourseCard) {

    const [count, setCount] = useState(likes);

    function handleLike() {
        setCount(count + 1)
    }

    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Text style={styles.cardTitle}>{title}</Text>

            <Image source={image} style={styles.cardImage} />

            <Text style={styles.cardDescribe}>
                {describe}
            </Text>

            <Pressable style={styles.likeButton} onPress={handleLike}>
                <Text style={styles.likeText}>
                    ❤️ {count}
                </Text>
            </Pressable>
        </Pressable>
    );

}