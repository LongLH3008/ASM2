import { useQuery } from "@tanstack/react-query";
import { getAllCategory, getOneCategory } from "../../services/Category";

const UsequeryCategory = (id?: number | string | undefined): any => {
	const { data, ...rest } = useQuery({
		queryKey: ["CATEGORY", id],
		queryFn: async () => {
			return id ? await getOneCategory(id) : await getAllCategory();
		},
	});
	return { data, ...rest };
};

export default UsequeryCategory;
