package audioTimeCapsules;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class OpenStreetMapExample {

    public static void main(String[] args) throws IOException {
        String query = "1600 Amphitheatre Parkway, Mountain View, CA";
        String nominatimApiUrl = "https://nominatim.openstreetmap.org/search?q=" + query + "&format=json";

        URL url = new URL(nominatimApiUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
            String line;
            StringBuilder response = new StringBuilder();

            while ((line = reader.readLine()) != null) {
                response.append(line);
            }

            System.out.println(response.toString());
        } finally {
            connection.disconnect();
        }
    }

    public static void main(String[] arg) {
        System.out.println("Hello");
    }
}
