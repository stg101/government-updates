from django.shortcuts import render
from django.http import JsonResponse
import csv


def index(request):
    regions = {}

    with open('scrapped_data.csv', mode='r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        line_count = 0
        for row in csv_reader:
            line_count += 1
            regions[str(line_count)] = {"name": row["name"],
                                        "id": row["id"], "authority": row["authority"]}

    return JsonResponse(regions)
