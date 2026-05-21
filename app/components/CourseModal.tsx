import { Modal, View, Text, Image, Pressable } from "react-native";
import styles from "../css/CourseModal";

type CourseModalProps = {
    visible: boolean;
    onClose: any;

    title: string;
    description?: string;
    professor: string;
    hours: string;
    image: any;
};

export default function CourseModal({
    visible,
    onClose,
    title,
    description,
    professor,
    hours,
    image,
}: CourseModalProps) {
    return (
        // Modal nativo do React Native
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <View style={styles.modalContainer}>

                <View style={styles.modalContent}>

                    <Image
                        source={image}
                        style={styles.modalImage}
                    />

                    <Text style={styles.modalTitle}>
                        {title}
                    </Text>

                    <Text style={styles.modalDescription}>
                        {description}
                    </Text>

                    <View style={styles.modalInfoArea}>
                        <Text style={styles.modalInfo}>
                            👨‍🏫 Professor: {professor}
                        </Text>

                        <Text style={styles.modalInfo}>
                            ⏰ Carga Horária: {hours}
                        </Text>
                    </View>

                    <View style={styles.modalButtons}>

                        <Pressable
                            style={styles.modalSecondaryButton}
                            onPress={onClose}
                        >
                            <Text style={styles.likeText}>
                                Fechar
                            </Text>
                        </Pressable>

                        <Pressable style={styles.modalPrimaryButton}>
                            <Text style={styles.likeText}>
                                Inscrever-se
                            </Text>
                        </Pressable>

                    </View>

                </View>

            </View>
        </Modal>
    );
}