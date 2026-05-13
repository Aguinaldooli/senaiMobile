import { View } from "react-native";
import styles from "../css/style";
import { Link } from "expo-router";

type LinkItem = {
  text: string;
  href: string;
};

type BottomLinksProps = {
  links: LinkItem[];
};

export default function BottomLinks({ links }: BottomLinksProps) {
  return (
    <View style={styles.contBaixo}>
      <View style={styles.baixo}>
        {links.map((link, index) => (
          <Link key={index} href={link.href} style={styles.direita}>
            {link.text}
          </Link>
        ))}
      </View>
    </View>
  );
}