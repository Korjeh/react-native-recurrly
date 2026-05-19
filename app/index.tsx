import { Redirect } from "expo-router";

export default function Index() {
    // This tells the app: "Whenever someone lands here, immediately send them to the tabs/home."
    return <Redirect href="/(tabs)" />;
}