from django.test import TestCase


class HealthEndpointTest(TestCase):
    def test_health_endpoint(self):
        response = self.client.get("/api/health/")

        self.assertEqual(response.status_code, 200)

        data = response.json()

        self.assertEqual(data["status"], "ok")
        self.assertIn("Configurar Docker", data["items"])
        self.assertIn("Automatizar CI", data["items"])
        self.assertIn("Publicar no GHCR", data["items"])
